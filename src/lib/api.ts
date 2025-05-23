// Copyright (C) 2025 xenorio <dev@xenorio.xyz>
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { PUBLIC_API_PREFIX } from '$env/static/public'

const headers = {
	'content-type': 'application/json'
}

export const paymentInit = (amount: number, recurring: boolean) => {
    return new Promise<string>((resolve, reject) => {
        fetch(PUBLIC_API_PREFIX + "/payment-init", {
            method: "POST",
            headers,
            body: JSON.stringify({
              amount,
              recurring
            }),
        })
            .then(async (res) => {
                if (res.status == 200) {
                    resolve((await res.json()).url);
                } else {
                    reject();
                }
            });
    });
};
