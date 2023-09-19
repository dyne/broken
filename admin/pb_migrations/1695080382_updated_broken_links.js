migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elv29imasf8p3z5")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("elv29imasf8p3z5")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
