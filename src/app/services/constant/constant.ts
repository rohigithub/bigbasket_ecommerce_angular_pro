export const Constant = {
    API_END_POINT:'http://localhost:8080/',
    METHODS: {
        GET_ALL_PRODUCT: 'getAllProducts',
        GET_ALL_CATEGORY: 'getAllCategory',
        GET_ALL_PRODUCT_BY_CATEGORY: 'getAllProductsByCategoryId/',

        GET_ALL_PRODUCT_BY_NAME:'search?productName=',
        REGISTER_USER:'registerUser',
        CREATE_PRODUCT: 'createProduct',
        UPDATE_PRODUCT: 'UpdateProduct',
        DELETE_PRODUCT: 'deleteProductById/',
        DELETE_CATEGORY:'deleteCategoryById/',
        CREATE_CATEGORY:'createCategory',
        UPDATE_CATEGORY:'updateCategoryById/',
        ADD_TO_CART: 'addProductToCart',
        GET_CART_BY_PRODUCT_ID: 'getProductById',
        REMOVE_CART: 'DeleteProductFromCartById?ID=',
        GET_CART_BY_CUST:'getCartProductsByUserId?id',
        LOGIN: 'Login',
        REGISTER: 'RegisterCustomer',
        CHECK_USER_LOGIN:'check_user',
        ADD_ORDER:'AddOrder'
    }
}
