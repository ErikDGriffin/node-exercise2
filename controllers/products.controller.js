import query from "../db/utils";

export const findAll = async () => {
    return await query("SELECT * FROM products");
};

export const findOne = async (productID) => {
    return await query("SELECT * FROM products WHERE ProductID = ?", [productID]);
};

export const addOne = async (product) => {
    return await query("INSERT INTO products SET ?", [product]); 
};

export const updateOne = async (product, productID) => {
    return await query("UPDATE products SET ? WHERE ProductID = ?", [product, productID]); 
};

export const removeOne = async (productID) => {
    return await query("DELETE FROM products WHERE ProductID = ?", [productID]); 
};
