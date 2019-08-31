import { BaseService } from './base'

class TestService extends BaseService {
    constructor() {
        super('http://10.10.20.218:8080')
    }

    async getTest(data) {
        return this.get(`/1/1?data=${data}`).then(res => {
            return res.data
        })
    }
}

export const testService = new TestService()
