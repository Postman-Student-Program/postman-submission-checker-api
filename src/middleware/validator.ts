import * as OpenApiValidator from 'express-openapi-validator'
import * as path from 'path'

const specPath = path.join(__dirname, '../schema.yaml')

const validator = OpenApiValidator.middleware({ apiSpec: specPath })

export { validator }
