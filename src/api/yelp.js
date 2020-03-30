import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Izi7NWjuRJuY9USEcqexSdWnmRf3JwmYzC3GALNxsIQwzB_qFS_SjHw2PsMBn_wixpmU8BRLCct48I_Gv4DvJ5WXrY6yi1_Ie30ScodTWgiea9Us243WLJcWtHaBXnYx'
    }
});


