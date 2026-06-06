import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Anthrologic',

  projectId: '5kajci3r',
  dataset: 'anthro-data',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
