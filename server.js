const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const bandMembers = {
  'robaire':{
    'eyeColor': 'Green',
    'personality': 'The leader',
    'funFact': 'Won Star Search when he was 9.',
    'soundsLike': 'Jordan Fischer'
  },
  'jesse':{
    'eyeColor': 'Blue',
    'personality': 'The heartthrob',
    'funFact': 'Has an art background in ceramics.',
    'soundsLike': 'Finneas'
  },
  'tae young':{
    'eyeColor': 'Brown',
    'personality': 'The sensitive one',
    'funFact': 'Has a passion for wildlife rehabilitation. Favorite animal is the dove.',
    'soundsLike': 'Grayson Villanueva'
  },
  'aaron t.':{
    'eyeColor': 'Brown',
    'personality': 'The bubbly prankster',
    'funFact': 'Spent two years playing competitive Laser Tag.',
    'soundsLike': 'Topher Ngo'
  },
  'aaron z.':{
    'eyeColor': 'Brown',
    'personality': 'The shy athlete',
    'funFact': `Does all of the band's choreography.`,
    'soundsLike': 'Josh Levi'
  },
  'unknown':{
    'eyeColor': 'None',
    'personality': 'Nonexistent',
    'funFact': `???`,
    'soundsLike': 'Nobody'
  },
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
 const memberName = request.params.name.toLowerCase()
  
 if (bandMembers[memberName]){
   response.json(bandMembers[memberName])
 }
  else {
    response.json(bandMembers['unknown'])
  }
 
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The Server is running on port ${PORT}`)
})