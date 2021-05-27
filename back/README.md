# Mapojob backend

## Init

Create a `.env` file with the following field and
appropriate values:

```
MONGO_USER=
MONGO_PASSWORD=
MONGO_HOST=
MONGO_PORT=
MONGO_DB_NAME=
```

Your mongo instance must have a `<MONGO_DB_NAME>` db.
Populate the collections with the files in the `./json/`
folder of the `jobsmap-db-tooling` project:

|  collection  |              file               |
|--------------|---------------------------------|
|   communes   | `referenciel-communes.json`     |
| departements | `referenciel-departements.json` |
|     jobs     | `jobs-<latest-date>.json`       |
|   regions    | `referenciel-regions.json`      |

## Shared types

```
JobsPerPlace {
    id: string,
    name: string,
    type: 'city',
    total: number,
    coords: [ number, number ]
}
```

## Endpoints

### `/jobs/places`

GET

```
{
    sucess: true,
    data: Array<JobsPerPlace>
}
```

### `/job/places/;placeId`

GET

```
{
    success: true,
    data: JobsPerPlace | false
}
```

Remarks:

1. A MongoDB _id is **not** guaranteed to be unique _across_
   collections, making it unsusable as placeId across place
   types.
2. Communes codes (INSEE and postal) are unique to this
   collection, codes for regions and departements overlap.
3. If we keep one of Region | Departement, the other becomes
   inaccessible. In the spirit of keeping things simple
   code-wise, the endpoint presented in this version only
   works with postal codes.
4. what do we return on an postal code with no associated
   job offers? As of now we return false. Of note:
   we cannot, we the db as is, return a `JobPerPlace`
   instance, as it have coords which are only available in a
   job offer, not in the communes referenciel.