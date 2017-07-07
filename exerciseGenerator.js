// @flow

type NoteLetter = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
type NoteModifier = 'Sharp' | 'Flat'

const SHARP: NoteModifier = 'Sharp'
const FLAT: NoteModifier = 'Flat'

type Note = {
  letter: NoteLetter,
  modifier?: NoteModifier
}

type NoteGroup = [Note]

const C = {
  letter: 'C'
}

const C_SHARP = {
  letter: 'C',
  modifier: SHARP
}

const D_FLAT = {
  letter: 'D',
  modifier: FLAT
}

const D = {
  letter: 'D'
}

const D_SHARP = {
  letter: 'D',
  modifier: SHARP
}

const E_FLAT = {
  letter: 'E',
  modifier: FLAT
}

const NOTE_LETTERS: [NoteLetter] = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

const NOTE_GROUPS: [NoteGroup] = [
  [C],
  [C_SHARP, D_FLAT],
  [D],
  [D_SHARP, E_FLAT]
]

const NOTES: [Note] = [C, C_SHARP, D]

type Exercise = {
  from: Note,
  to: Note,
  distance: Distance
}

type Distance = {
  name: string,
  semitones: number
}

type RelativeInterval = number

function randomFromArray<T>(arr: [T]): T {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function distanceInArray<T>(arr: [T], a: T, b: T): number {
  const indexA = arr.indexOf(a)
  const indexB = arr.indexOf(b)

  if (indexB > indexA) {
    return indexB - indexA
  } else {
    return arr.length - indexA + indexB
  }
}

const distanceBetweenLetters = distanceInArray.bind(null, NOTE_LETTERS)

function getRandomNoteGroup(options: { except?: NoteGroup } = {}): NoteGroup {
  const { except } = options
  return randomFromArray(
    except ?
    NOTE_GROUPS.filter(note_group => note_group !== except) :
    NOTE_GROUPS
  )
}

function distance(from: Note, to: Note): Distance {
  const semitones = semitonesBetweenNotes(from, to)
  let realDistance;

  switch (semitones) {
    case 1: realDistance = 'm2'; break
    case 2: realDistance = 'M2'; break
    case 3: realDistance = 'm3'; break
    case 4: realDistance = 'M3'; break
    case 5: realDistance = 'P4'; break
    case 7: realDistance = 'P5'; break
    case 8: realDistance = 'm6'; break
    case 9: realDistance = 'M6'; break
    case 10: realDistance = 'm7'; break
    case 11: realDistance = 'M7'; break
    case 6:
      const relativeInterval = distanceBetweenLetters(from.letter, to.letter)
      realDistance = relativeInterval === 3 ? 'A4' : 'd5'
      break
  }

  if (!realDistance) {
    throw new Error(`Distance between notes sould be between 1 and 11, was ${semitones}`)
  }

  return {
    name: realDistance,
    semitones
  }
}

function semitonesBetweenNotes(fromNote: Note, toNote: Note): number {
  const toGroup = NOTE_GROUPS.find(group => group.includes(toNote))
  return semitonesFromNoteToGroup(fromNote, toGroup)
}

function semitonesFromNoteToGroup(fromNote: Note, toGroup: NoteGroup): number {
  const fromGroup = NOTE_GROUPS.find(group => group.includes(fromNote))
  return distanceInArray(NOTE_GROUPS, fromGroup, toGroup)
}

function relativeIntervalsForSemitones(semitones: number): [RelativeInterval] {
  switch (semitones) {
    case 1: return [2]
    case 2: return [2]
    case 3: return [3]
    case 4: return [3]
    case 5: return [4]
    case 6: return [4, 5]
    case 7: return [5]
    case 8: return [6]
    case 9: return [6]
    case 10: return [7]
    case 11: return [7]
    default: throw new Error(`Semitones must be between 1 and 11, were ${semitones}`)
  }
}

function relativeLetterForInterval(
  fromLetter: NoteLetter,
  interval: RelativeInterval
): NoteLetter {
  const baseIndex = NOTE_LETTERS.indexOf(fromLetter)
  let newIndex = baseIndex + interval - 1

  if (newIndex >= NOTE_LETTERS.length) {
    newIndex -= NOTE_LETTERS.length
  }

  return NOTE_LETTERS[newIndex]
}

function validNoteFromGroup(baseNote: Note, destinationGroup: NoteGroup): Note {
  const semitones = semitonesFromNoteToGroup(baseNote, destinationGroup)
  const relativeIntervals = relativeIntervalsForSemitones(semitones)
  const relativeInterval = randomFromArray(relativeIntervals)
  const relativeLetter = relativeLetterForInterval(baseNote.letter, relativeInterval)

  return destinationGroup.find(note => note.letter === relativeLetter)
}

export default function createExercise(): Exercise {
  const fromNoteGroup = getRandomNoteGroup()
  const toNoteGroup = getRandomNoteGroup({ except: fromNoteGroup })
  const fromNote = randomFromArray(fromNoteGroup)
  const toNote = validNoteFromGroup(fromNote, toNoteGroup)

  const distance = distance(fromNote, toNote)

  return {
    from: fromNote,
    to: toNote,
    distance
  }
}
