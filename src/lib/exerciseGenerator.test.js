import { expect } from "chai";
import getRandomInterval, {
  randomFromArray,
  distanceInArray,
  distance,
  C_FLAT,
  C,
  C_SHARP,
  D_FLAT,
  D,
  D_SHARP,
  E_FLAT,
  E,
  E_SHARP,
  F_FLAT,
  F,
  F_SHARP,
  G_FLAT,
  G,
  G_SHARP,
  A_FLAT,
  A,
  A_SHARP,
  B_FLAT,
  B,
  B_SHARP
} from "./exerciseGenerator";

describe("randomFromArray", () => {
  it("returns undefined for an empty array", () => {
    expect(randomFromArray([])).to.be.undefined;
  });

  it("returns the single element of a one-element array", () => {
    const element = 1;
    expect(randomFromArray([element])).to.equal(element);
  });

  it("always returns an element from the array", () => {
    const arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < 10; i++) {
      const randomElement = randomFromArray(arr);
      expect(arr).to.include(randomElement);
    }
  });
});

describe("distanceInArray", () => {
  it("counts the amount in between if the second element is after the first", () => {
    const arr = ["A", "B", "C", "D", "E"];
    expect(distanceInArray(arr, "B", "D")).to.equal(2);
  });

  it("counts all the way around if the second element is before the first", () => {
    const arr = ["A", "B", "C", "D", "E"];
    expect(distanceInArray(arr, "D", "B")).to.equal(3);
  });
});

describe("distance", () => {
  it("is m2 for one semitone", () => {
    expect(distance(C, D_FLAT).name).to.equal("m2");
  });

  it("is M2 for two semitones", () => {
    expect(distance(C, D).name).to.equal("M2");
  });

  it("is m3 for three semitones", () => {
    expect(distance(C, E_FLAT).name).to.equal("m3");
  });

  it("is M3 for four semitones", () => {
    expect(distance(C, E).name).to.equal("M3");
  });

  it("is P4 for five semitones", () => {
    expect(distance(C, F).name).to.equal("P4");
  });

  it("is A4 for six semitones if the notes are 4 letters apart", () => {
    expect(distance(C, F_SHARP).name).to.equal("A4");
  });

  it("is d5 for six semitones if the notes are 5 letters apart", () => {
    expect(distance(C, G_FLAT).name).to.equal("d5");
  });

  it("is P5 for 7 semitones", () => {
    expect(distance(C, G).name).to.equal("P5");
  });

  it("is m6 for 8 semitones", () => {
    expect(distance(C, A_FLAT).name).to.equal("m6");
  });

  it("is M6 for 9 semitones", () => {
    expect(distance(C, A).name).to.equal("M6");
  });

  it("is m7 for 10 semitones", () => {
    expect(distance(C, B_FLAT).name).to.equal("m7");
  });

  it("is M7 for 11 semitones", () => {
    expect(distance(C, B).name).to.equal("M7");
  });

  it("throws an error for > 11 semitones", () => {
    expect(() => distance(C, B_SHARP)).to.throw();
  });
});

describe("getRandomInterval", () => {
  it("works", () => {
    expect(getRandomInterval).not.to.be.undefined;
  });
});
