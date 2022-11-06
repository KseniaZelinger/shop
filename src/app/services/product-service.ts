export class Product {
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(
        name: string;
        description: string;
        price: number;
        imgUrl: string;
    ) {
        this.name = _name;
        this.description = _description;
        this.price = _price;
        this.imgUrl = _imgUrl;
    }
}

export class ProductService {
    private products: Product[] = [];

    public getProducts(): Product[] {
        return this.products;
    }
}

public makeMockProducts() {
    this.product.push(
        new Product(
            "Платье комбинация", "Платье-комбинация из вискозного плотного, роскошного атласа. Подчеркивает грудь и превосходно смотрится как с жакетом, так и с свитером свободного кроя.",
            5990, "size s, m, l", "https://imgur.com/8mGmWjE"
        ),
        new Product(
            "Свитер over size", "Бежевый свитер свободного кроя станет универсальным предметом в вашем гардеробе!", 4990, "size: one", "https://imgur.com/ZuCvxd7"
        ),
        new Product(
            "Укороченный жакет", "Трендовый укороченный жакет в ярком оттенке «ультрамарин»", 7120, "size: one", "https://imgur.com/6aPkgqs"
        ),
        new Product(
            "Классические брюки с защипами", "Базовые брюки из костюмной ткани в сером цвете. Высокая посадка, боковые карманы, защипы по талии. Фасон дополнен шлевками для ремня и отворотами.",
            6799, "size s, m, l", "https://imgur.com/Mg9HJkv"
        ),
        new Product(
            "Рубашка классическая белая", "Белая рубашка прямого кроя в едином размере, выполнена из 100% хлопка", 4990, "size: one", "https://imgur.com/GSWCGn7"
        ),
        new Product(
            "Трикотажный кроп-топ", "Вязаный укороченный топ из прохладной шелковистой вискозы", 3990, "size: one", "https://imgur.com/ovWXUpY"
        ),
        new Product(
            "Жакет over size", "Жакет выполнен из костюмной ткани средней плотности, c асимметричной застежкой на пуговицу.", 9990, "size: one", "https://imgur.com/Z5P2iVx"
        ),
        new Product(
            "Жакет с открытой спиной over size", "Жакет с удлиненными рукавами и манжетами на пуговицах", 11990, "size: one", "https://imgur.com/3jQClEa"
        )
    )
}