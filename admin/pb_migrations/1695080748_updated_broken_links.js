migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elv29imasf8p3z5")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elv29imasf8p3z5")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
