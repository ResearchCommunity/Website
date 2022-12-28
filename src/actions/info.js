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

const config = require('../../config')

module.exports.info = {
    path: '/'
}

module.exports.GET = async(req, res) => {
    if (req.query['json'] == 'true') {
        res.json({
            version: config.version
        })
    } else {
        res.send(`
            Research Community API v${config.version}<br><br>
            <a href="https://github.com/ResearchCommunity/Website">GitHub</a><br><br>
            Append "?json=true" to get version information in JSON format
        `)
    }
}