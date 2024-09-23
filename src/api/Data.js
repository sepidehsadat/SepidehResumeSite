// import api from '../assets/images/api.png'
import bd from '../assets/images/projects/bd.PNG'
import AdManager from '../assets/images/projects/ad_manager.PNG'
import NamirasoftCom from '../assets/images/projects/namirasoft_com.PNG'
import NamirasoftIR from '../assets/images/projects/namirasoft_ir.png'
import GoldenBeach from '../assets/images/projects/golden_beach.PNG'
import NftReportting from '../assets/images/projects/nft_reportting.PNG'
import Account_1 from '../assets/images/projects/account/account_1.JPG'
import Timify_1 from '../assets/images/projects/timify/timify_1.JPG'
export default class Data
{
	static getProjects()
	{
		return [
			{
				title: 'Account',
				key: 0,
				description: 'User Panel',
				images: [
					Account_1
				],
			},
			{
				title: 'Timify',
				key: 0,
				description: 'Employee performance report site',
				images: [
					Timify_1
				],
			},
			{
				title: 'Nft Reporting Admin',
				key: 1,
				description: 'User Panel',
				images: [
					NftReportting
				],
			},
			{
				title: 'BD',
				key: 2,
				description: 'NFT sales site',
				image: bd,
				images: [
					Timify_1
				],
			},
			{
				title: 'namiraSoft.com',
				key: 3,
				description: 'Corporate Site',
				images: [
					NamirasoftCom
				],
			},
			{
				title: 'NamiraSoft.ir',
				key: 4,
				description: 'Corporate Site',
				images: [
					NamirasoftIR
				],
			},
			{
				title: 'Golden Beach',
				key: 6,
				description: 'Shopping Website',
				images: [
					GoldenBeach
				],
			},
			{
				title: 'AdManager',
				key: 7,
				description: 'User Panel',
				images: [
					AdManager
				],
			},
		]
	}
}
