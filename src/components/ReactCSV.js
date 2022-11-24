import React from 'react'
import { CSVLink } from 'react-csv'
import Card from './Card'

function ReactCSV({ usersFile }) {

  return (
    <Card >
      <CSVLink className='csv-link'
      data={usersFile}
      filename={"CSV_File"}
      target="_blank"
      >
        CSV File
      </CSVLink>
    </Card>
  )
}

export default ReactCSV
