const sql = require("../database/connection.js")
const crypto = require('crypto');

class AccountService {

    async createAccount(cpf, name) {

        const id = crypto.randomUUID()

        await sql`INSERT INTO accounts (id, name, cpf) VALUES (${id}, ${name}, ${cpf})`

    }

    async searchBankStatementOfAccount(id) {

        const account = await sql`SELECT * FROM accounts WHERE id=${id}`

        return account

    }

    async depositCash(cash, cpf, datetime) {

        await sql`UPDATE accounts SET balance = ${cash}, datetime = ${datetime} WHERE cpf = ${cpf}`

    }

    async withdrawCash() {

    }

    async searchBankStatementOfAccountByDate() {

    }

    async updateAccountData() {

    }

    async getDataOfAccount() {

    }

    async deleteAccount() {

    }

}

module.exports = AccountService