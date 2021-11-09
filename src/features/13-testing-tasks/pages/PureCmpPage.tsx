import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

import PureList from '../components/PureList';
import PureMyCard from '../components/PureMyCard';
import PureOptionPicker from '../components/PureOptionPicker';
import { ALL_COUNTRIES } from '../dictionaries/countries.dict';
import { ALL_PRODUCTS, IProduct } from '../dictionaries/products';

export default function PureCmpPage(): React.ReactElement {
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(ALL_PRODUCTS[1]);

  const selectProductHandler = (product: IProduct) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h3>PureCmpPage</h3>

      <Row className="mx-5 mb-5">
        <PureOptionPicker
          title="Available Products"
          items={ALL_PRODUCTS}
          selectedItem={selectedProduct}
          onItemSelect={selectProductHandler}
        />
      </Row>

      <Row className="mx-5 mb-5">
        <PureMyCard
          header={<h3>Lorem header</h3>}
          footer="Lorem footer"
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tortor, porttitor aliquet diam porta,
              venenatis mattis justo. Integer non orci at sapien cursus elementum. Integer laoreet enim id massa ullamcorper
              tempus. Suspendisse potenti. Ut aliquam lectus orci, quis tincidunt dui porttitor id. Donec id molestie massa.
              Curabitur finibus, dolor at imperdiet porttitor, ligula odio faucibus nunc, nec iaculis lectus leo et augue. Duis
              vehicula pulvinar erat sed viverra.
            </p>
          }
        />
      </Row>

      <Row className="mx-5 mb-5">
        <PureList
          items={ALL_COUNTRIES}
          renderItem={
            (country) => <h6>{country.name}</h6>
          }
        />
      </Row>
    </div>
  );
}

