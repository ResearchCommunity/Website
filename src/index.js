/*
    Copyright (C) 2022  Marcus Huber (xenorio) <https://xenorio.xyz> <dev@xenorio.xyz>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const express = require('express')
const fs = require('fs')

const config = require('../config')

const app = express()

app.use(express.json())

fs.readdirSync('./src/actions').forEach(file => {
    let action = require(`./actions/${file}`)
    if (action.GET) {
        app.get(config.pathPrefix + action.info.path, action.GET)
    }
    if (action.POST) {
        app.post(config.pathPrefix + action.info.path, action.POST)
    }
})

app.get('*', (req, res) => {
    res.status(404).json({
        error: 'Invalid Action or Method'
    })
})

app.post('*', (req, res) => {
    res.status(404).json({
        error: 'Invalid Action or Method'
    })
})

app.listen(config.port, () => {
    console.log('Listening on port ' + config.port)
})