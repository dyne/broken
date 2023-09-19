migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nopzrf0n7mbfu58");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nopzrf0n7mbfu58",
    "created": "2023-08-21 14:00:05.210Z",
    "updated": "2023-09-18 18:15:52.899Z",
    "name": "webauthnCredentials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xootznbs",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "of3px3ud",
        "name": "credential",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "gfynehdb",
        "name": "description",
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
    "indexes": [
      "CREATE INDEX `idx_p4OsklQ` ON `webauthnCredentials` (`user`)"
    ],
    "listRule": "user.id = @request.auth.id",
    "viewRule": "user.id = @request.auth.id",
    "createRule": null,
    "updateRule": "user.id = @request.auth.id",
    "deleteRule": "user.id = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
