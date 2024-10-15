import Buyable from "./buyable";

export default class Cart{
    public items: Buyable[] = [];

    add (item: Buyable) {
        this.items.push(item)
    }

    get items1(): Buyable[]{
        return [...this.items]
    }

    countSum (): string{
        let sum:number = 0
        for (let i in [...this.items]){
            sum += [...this.items][i].price
        }
        return `Сумма без скидок всех товаров ${sum}`
    }

    countSumObj (id:number): string{
        for (let i in [...this.items]) {
            if (id == [...this.items][i].id) {
                return `Цена (отдельного товара) без скидки ${[...this.items][i].price}`
            }
        }
    }

    countSumDisc (id:number, discount): string{
        for (let i in [...this.items]) {
            if (id == [...this.items][i].id) {
                return `Цена (отдельного товара) со скидкой ${[...this.items][i].price - ([...this.items][i].price * (discount / 100))}`
            }
        }
    }

    countDisc(discount): string{
        let sumNoDisc:number = 0
        for (let i in [...this.items]) {
            sumNoDisc += [...this.items][i].price
        }
        return `Сумма всех товаров со скидкой ${sumNoDisc - (sumNoDisc * (discount / 100))}`
    }

    deleteObj(id: number): any {
        this.items = this.items.filter(item => item.id !== id);
        return this.items;
    }
}