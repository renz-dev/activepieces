import { clockodoCommon, makeClient } from "../../common";
import { clockodo } from "../../../";

clockodo.addAction({
    name: 'get_customer',
    displayName: 'Get Customer',
    description: 'Retrieves a single customer from clockodo',
    props: {
        customer_id: clockodoCommon.customer_id(true, undefined)
    },
    async run({ auth, propsValue }) {
        const client = makeClient(auth);
        const res = await client.getCustomer(propsValue.customer_id as number)
        return res.customer
    }
})
