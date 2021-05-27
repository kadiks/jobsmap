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

## Endpoints

### `/jobs/places`

GET

```
{
    sucess: true,
    data: Array<JobsPerPlace>
}

JobsPerPlace {
    id: string,
    name: string,
    type: 'city',
    total: number,
    coords: [ number, number ]
}
```