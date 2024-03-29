const AccountService = require('../services/AccountService.js')

const accountService = new AccountService()

class AccountController {

    async createAccount(request, response) {

        const { cpf, name } = request.body

        await accountService.createAccount(cpf, name)

        try {

            return response.status(201).json({ message: "Account created!" })

        } catch(error) {

            return error

        }

    }

    async searchBankStatementOfAccount(request, response) {

        const { cpf } = request.body

        const accountDatabase = await accountService.searchBankStatementOfAccount(cpf)

        try {

            return response.status(200).json(accountDatabase)

        } catch(error) {

            return error

        }

    }

    async depositCash(request, response) {

        const { cash, cpf, datetime } = request.body

        await accountService.depositCash(cash, cpf, datetime)

        try {

            return response.status(201).json({ message: "Succesfull deposit!" })

        } catch(error) {

            return response.status(400).json({ message: "Wasn't possible to deposit!" })

        }

    }

    async withdrawCash(request, response) {

        const { cash, cpf, datetime } = request.body

        await accountService.withdrawCash(cash, cpf, datetime)

        try {

            return response.status(200).json({ message: "Succesfull withdraw!" })

        } catch(error) {

            return response.status(400).json({ error: "Wasn't possible to withdraw!" })

        }

    }

    async searchBankStatementOfAccountByDate(request, response) {

        const { datetime } = request.body

        const accountStatement = await accountService.searchBankStatementOfAccountByDate(datetime)

        try {

            return response.status(200).json(accountStatement)

        } catch(error) {
            
            return error

        }

    }

    async updateAccountData(request, response) {

        const { name, newCpf, cpf } = request.body

        await accountService.updateAccountData(name, newCpf, cpf)

        try {

            return response.status(200).json({ message: "Account updated!" })

        } catch(error) {

            return error

        }

    }

    async getDataOfAllAccounts(request, response) {

        const accounts = await accountService.getDataOfAllAccounts()

        try {

            return response.status(200).json(accounts)

        } catch(error) {

            return error

        }

    }

    async deleteAccount(request, response) {

        const { cpf } = request.body

        await accountService.deleteAccount(cpf)

        try {

            return response.status(200).json({ message: "Account succesfull deleted!" })

        } catch(error) {

            return error

        }

    }

}

module.exports = AccountController