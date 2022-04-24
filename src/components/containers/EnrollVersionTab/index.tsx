import React, { useState } from 'react';
import TabTemplate from '../../templates/TabTemplate';
import InputFile from '../../widgets/InputFile';
import Input from '../../widgets/Input';
import DefaultText from '../../widgets/DefaultText';
import Table, { ItemType } from './Table';
import * as Style from './styled';

function EnrollVersionTab() {
  const [items, setItems] = useState<ItemType[]>([]);

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  return (
    <TabTemplate description="Description" onCreate={() => {}}>
      <Style.BackGroundBox direction="column">
        <Style.InputWrapper>
          <DefaultText label="프로젝트명">프로젝트명</DefaultText>
          <Input label="버전명" width="30rem" value="" onChange={() => {}} />
        </Style.InputWrapper>
        <Style.DescriptionWrapper>
          <Style.Label>설명</Style.Label>
          <Style.DescriptionInput />
        </Style.DescriptionWrapper>
      </Style.BackGroundBox>
      <Style.BackGroundBox direction="row">
        <InputFile label="SRC" onChange={() => {}} />
        <InputFile label="BIN" onChange={() => {}} />
      </Style.BackGroundBox>
      <Style.TableWrapper>
        <Table items={items} licenses={[]} onAddNewItem={addNewItem} onDeleteItem={deleteItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default EnrollVersionTab;
