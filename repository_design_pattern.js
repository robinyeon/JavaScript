const MOCK_PRODUCTS = [
  {
    uid: "cau-jacket-230302",
    name: "중앙대 신방과 과잠",
    price: 18700,
    createdAt: "2023-03-02",
    updatedAt: "2023-10-27",
  },
  {
    uid: "jinhak-sliper-230627",
    name: "진학사 서비스개발팀 슬리퍼",
    price: 9900,
    createdAt: "2018-06-27",
    updatedAt: "2022-09-18",
  },
  {
    uid: "jei-learningpen-20171101",
    name: "재능교육 스스로펜",
    price: 9900,
    createdAt: "2017-11-01",
    updatedAt: "2023-10-09",
  },
];

/**
 * Repository 구현
 *
 * 반드시 상속 받고 모든 메소드를 override
 *
 * Mock Data 확인 후 구현
 */
class Repository {
  constructor(name) {
    this.name = name;
  }

  // override
  findById(id) {
    // Do something...
  }

  // override
  findAll() {
    // Do something...
  }

  // override
  updateOneById(id) {
    // Do something...
  }

  // override
  deleteOneById() {
    // Do something...
  }
}

class ProductRepository extends Repository {
  constructor() {
    super("ProductRepository");
  }

  // override
  findById(id) {
    const foundProduct = MOCK_PRODUCTS.find((product) => product.uid === id);

    if (foundProduct) {
      return foundProduct;
    }

    return null;
  }

  // override
  findAll() {
    const foundProducts = MOCK_PRODUCTS;
    if (!foundProducts) return null;
    return foundProducts;
  }

  // override
  /**
   * body {name : '라푸 간식', price: 23000}
   * */
  updateOneById(id, body) {
    const updatedProduct = MOCK_PRODUCTS.find((product) => product.uid === id);
    let keys = Object.keys(body);
    keys.forEach((key) => (updatedProduct[key] = body[key]));
    return updatedProduct;
  }

  // override
  deleteOneById(id) {
    const remainedProducts = MOCK_PRODUCTS.filter(
      (product) => product.uid !== id
    );

    return remainedProducts;
  }
}

/**
 * Test는 아래의 함수를 통해서 확인
 */
function main() {
  // 아래의 uid에 적절한 값들을 넣어 확인
  const uid = "jei-learningpen-20171101";
  const body = { name: "라푸 간식", price: 23000 };

  const productRepository = new ProductRepository();
  const foundProudct = productRepository.findById(uid);
  console.log("find one: ", foundProudct);

  const foundProducts = productRepository.findAll(uid);
  console.log("find all: ", foundProducts);

  const updatedProduct = productRepository.updateOneById(uid, body);
  console.log("update one: ", updatedProduct);

  const deleteOneById = productRepository.deleteOneById(uid);
  console.log("deleted, and remaings: ", deleteOneById);
}

main();
