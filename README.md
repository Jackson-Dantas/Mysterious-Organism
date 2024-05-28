# Pila Aequor Project From Code Academy

## Project Goals

You are part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team has named the organism Pila aequor (P. aequor), and has found that it is only comprised of 15 DNA bases. The small DNA samples and the frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

## Tasks

1. Since you need to create multiple objects, create a factory function `pAequorFactory()` that has two parameters:
   - The first parameter is a number (no two organisms should have the same number).
   - The second parameter is an array of 15 DNA bases.
   - `pAequorFactory()` should return an object that contains the properties `specimenNum` and `dna` that correspond to the parameters provided.

2. Your team wants you to simulate P. aequor's high rate of mutation (change in its DNA).
   - To simulate a mutation, in `pAequorFactory()`'s returned object, add the method `.mutate()`.
   - `.mutate()` is responsible for randomly selecting a base in the object's `dna` property and changing the current base to a different base.
   - Then `.mutate()` will return the object's `dna`.

3. Your research team wants to be able to compare the DNA sequences of different P. aequor. You'll have to add a new method `.compareDNA()` to the returned object of the factory function.
   - `.compareDNA()` has one parameter, another pAequor object.
   - The behavior of `.compareDNA()` is to compare the current pAequor's `dna` with the passed in pAequor's `dna` and compute how many bases are identical and in the same locations.
   - `.compareDNA()` does not return anything, but prints a message that states the percentage of DNA the two objects have in common.

4. P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
   - In the returned object of `pAequorFactory()`, add another method `.willLikelySurvive()`.
   - `.willLikelySurvive()` returns true if the object's `dna` array contains at least 60% 'C' or 'G' bases. Otherwise, `.willLikelySurvive()` returns false.

5. With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
