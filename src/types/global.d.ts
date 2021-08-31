interface PostmanCollection {
  info: Info
  item: PostmanCollectionItem[]
  auth: PostmanCollectionAuth
  event: PostmanCollectionEvent[]
  variable: Variable[]
}

/** This doesn't feel exhaustive... */
interface PostmanCollectionAuth {
  type: string
  apikey: ApikeyElement
}

interface ApikeyElement {
  key: string
  value: string
}

interface PostmanCollectionEvent {
  listen: string
  script: Script
}

interface Info {
  _postman_id: string
  name: string
  description: string
  schema: string
}

interface PostmanCollectionItem {
  name: string
  item: ItemItem[]
  id: string
  auth?: ItemAuth
  event?: PostmanCollectionEvent[]
}

interface ItemAuth {
  type: string
  apikey: ApikeyElement
}

interface Script {
  id: string
  type: string
  exec: string[]
}
