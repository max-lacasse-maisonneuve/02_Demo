import { expect } from "chai";
import { describe, it } from "mocha";
import Filtre from "../assets/js/components/Filtre.js";

describe("Test propriétés filtres", () => {
    it("should return return 6", () => {
        const filtre = new Filtre();
        expect(filtre.additionner(2, 4)).to.be.equal(6);
    });
});
