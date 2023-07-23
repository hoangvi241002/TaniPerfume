import React from 'react';

const ItemComponent = ({ availableProducts, outOfStockProducts }) => {
    return (
        <ul> Trạng Thái Sản Phẩm
            <li>
                <input type="checkbox" name="" value="" /> Còn Hàng ({outOfStockProducts} sản phẩm)
            </li>
            <li>
                <input type="checkbox" name="" value="" /> Hết Hàng ({availableProducts} sản phẩm)
            </li>
        </ul>
    );
};

export default ItemComponent;
