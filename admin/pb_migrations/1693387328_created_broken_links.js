migrate((db) => {
  const collection = new Collection({
    "id": "elv29imasf8p3z5",
    "created": "2023-08-30 09:22:08.720Z",
    "updated": "2023-08-30 09:22:08.720Z",
    "name": "broken_links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "afogsnql",
        "name": "url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "l8iuwhz8",
        "name": "path",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gfswjs8j",
        "name": "baseurl",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("elv29imasf8p3z5");

  return dao.deleteCollection(collection);
})
