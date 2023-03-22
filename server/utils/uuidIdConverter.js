exports.convertUuidToId = async (model, uuid) => {
    return (await model.findOne({ where: { uuid }, attributes: ['id'] }))?.id;
};

exports.convertUuidsToIds = async (model, uuids) => {
    return (
        await model.findAll({ where: { uuid: uuids }, attributes: ['id'] })
    )?.map((data) => data.id);
};

exports.convertIdToUuid = async (model, id) => {
    return (await model.findOne({ where: { id }, attributes: ['uuid'] }))?.uuid;
};

exports.convertIdsToUuids = async (model, ids) => {
    return (
        await model.findAll({ where: { id: ids }, attributes: ['uuid'] })
    )?.map((data) => data.uuid);
};
