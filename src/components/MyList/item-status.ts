import { reduce } from 'lodash';

const ITEM_STATUS = {
  persisted: 'PERSISTED',
  removing: 'REMOVING',
  saving: 'SAVING',
  editing: 'EDITING',
};

function statusesMapFor(items: any, { removing = {}, saving = {}, editing = {} } = {}) {
  return reduce(items, (memo, item) => {
    const { id } = item;
    if (!id) {
      throw new Error(`Missing required 'id' property`);
    }
    let status = ITEM_STATUS.persisted;
    if (!!(removing as any)[id]) {
      status = ITEM_STATUS.removing;
    } else if (!!(editing as any)[id]) {
      status = ITEM_STATUS.editing;
    } else if (!!(saving as any)[id]) {
      status = ITEM_STATUS.saving;
    }
    (memo as any)[id] = status;
    return memo;
  }, {});
}

export {
  ITEM_STATUS,
  statusesMapFor,
}
