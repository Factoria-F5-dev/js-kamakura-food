import { describe, expect, it, beforeAll } from "vitest";
import { filtersContainer, filters } from "../functions";

describe("filter",()=>{
    
    it("should be declared const 'filtersContainer' for search class '.filters-container'",()=>{
        expect(filtersContainer).toBeDefined();
    })
    it('should return an array filters',()=>{
        expect(filters).toEqual(['ramen', 'ryu', 'entradas', 'postres', 'bebidas']);
    })
    it("should return a new array with the name of menus",()=>{
        const array = ['ramen', 'ryu', 'entradas', 'postres', 'bebidas'];
        expect(filtersContainer(array
            )).toEqual(['ramen', 'ryu', 'entradas', 'postres', 'bebidas']);
    })

   
})

describe("products",()=>{

    it("should be declared const 'productsContainer' for search class '.products-container'",()=>{
        expect(productsContainer).toBeDefined();
    })

    it("should return a new array with the name of menus",()=>{
        const array = [{
            id: 0,
            name: 'Miso Ramen',
            description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
            price: 9.50
        },
        {
            id: 1,
            name: 'Paitan',
            description: 'Paitan significa sopa blanca en japonés, cremoso y aterciopelado a base de verduras y pollo, cocido según la tradición.',
            price: 12
        },];
        // haz que el test lea el array products y compruebe que el array tiene los mismos elementos que el array de arriba
        expect(array).toEqual([{
            id: 0,
            name: 'Miso Ramen',
            description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
            price: 9.50
        },
        {
            id: 1,
            name: 'Paitan',
            description: 'Paitan significa sopa blanca en japonés, cremoso y aterciopelado a base de verduras y pollo, cocido según la tradición.',
            price: 12
        },]);

    })

})