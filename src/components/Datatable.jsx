import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Name',
		selector: row => row.first_name + ' ' + row.last_name,
		sortable: true,
	},
	{
		name: 'Email',
		selector: row => row.email,
		sortable: true,
	},
	{
		name: 'Gender',
		selector: row => row.gender,
		sortable: true,
	},
	{
		name: 'Address',
		selector: row => row.ip_address,
		sortable: true,
	},
	{
		name: "Actions",
		cell: (row) => (
			<>
				<div className='flex gap-2'>
					<button
						className="btn btn-outline btn-sm"
						onClick={(e) => handleButtonClick(e, row.email)}
					>
						Edit
					</button>
					<button
						className="btn btn-outline btn-sm"
						onClick={(e) => handleButtonClick(e, row.email)}
					>
						Edit
					</button>
				</div>
			</>
		),
	}
	
];

const handleButtonClick = (e, email) => {
    e.preventDefault();
    console.log("Row Email", email);
};

const data = [
	{"id":1,"first_name":"Milena","last_name":"Redwin","email":"mredwin0@walmart.com","gender":"Female","ip_address":"161.179.184.114"},
	{"id":2,"first_name":"Marcellus","last_name":"Robrose","email":"mrobrose1@army.mil","gender":"Male","ip_address":"247.76.215.221"},
	{"id":3,"first_name":"Bryn","last_name":"Mosen","email":"bmosen2@nasa.gov","gender":"Agender","ip_address":"72.241.74.183"},
	{"id":4,"first_name":"Maxim","last_name":"Vincent","email":"mvincent3@nature.com","gender":"Male","ip_address":"151.114.2.24"},
	{"id":5,"first_name":"Tadd","last_name":"Rider","email":"trider4@slideshare.net","gender":"Agender","ip_address":"215.97.227.84"},
	{"id":6,"first_name":"Sissie","last_name":"Gosz","email":"sgosz5@usatoday.com","gender":"Female","ip_address":"220.91.89.69"},
	{"id":7,"first_name":"Samuel","last_name":"Ickov","email":"sickov6@mediafire.com","gender":"Male","ip_address":"163.23.114.58"},
	{"id":8,"first_name":"Salomo","last_name":"Leftbridge","email":"sleftbridge7@twitter.com","gender":"Male","ip_address":"205.164.195.188"},
	{"id":9,"first_name":"Aimil","last_name":"Laurenson","email":"alaurenson8@posterous.com","gender":"Female","ip_address":"124.197.127.46"},
	{"id":10,"first_name":"Harriot","last_name":"Ducarne","email":"hducarne9@technorati.com","gender":"Female","ip_address":"152.14.187.160"},
	{"id":11,"first_name":"Carmina","last_name":"Ivanchov","email":"civanchova@biblegateway.com","gender":"Female","ip_address":"122.243.24.31"},
	{"id":12,"first_name":"Marie","last_name":"Candie","email":"mcandieb@t-online.de","gender":"Female","ip_address":"62.239.104.229"},
	{"id":13,"first_name":"Lydon","last_name":"Spores","email":"lsporesc@utexas.edu","gender":"Male","ip_address":"4.180.32.151"},
	{"id":14,"first_name":"Neile","last_name":"Gayne","email":"ngayned@cisco.com","gender":"Female","ip_address":"203.23.209.145"},
	{"id":15,"first_name":"Ali","last_name":"Storie","email":"astoriee@google.com.br","gender":"Male","ip_address":"237.234.97.233"},
	{"id":16,"first_name":"Laureen","last_name":"Wheowall","email":"lwheowallf@imgur.com","gender":"Female","ip_address":"7.224.200.38"},
	{"id":17,"first_name":"Jonie","last_name":"Gorce","email":"jgorceg@ucla.edu","gender":"Female","ip_address":"41.72.171.173"},
	{"id":18,"first_name":"Archibold","last_name":"Daws","email":"adawsh@tamu.edu","gender":"Male","ip_address":"175.131.103.143"},
	{"id":19,"first_name":"Ode","last_name":"Aggis","email":"oaggisi@ameblo.jp","gender":"Male","ip_address":"68.158.83.1"},
	{"id":20,"first_name":"Isaac","last_name":"Heustace","email":"iheustacej@npr.org","gender":"Male","ip_address":"203.147.53.22"},
	{"id":21,"first_name":"Helen","last_name":"Brimley","email":"hbrimleyk@youku.com","gender":"Female","ip_address":"56.19.236.2"},
	{"id":22,"first_name":"Curcio","last_name":"Tunmore","email":"ctunmorel@delicious.com","gender":"Male","ip_address":"174.76.184.233"},
	{"id":23,"first_name":"Fernande","last_name":"Creffeild","email":"fcreffeildm@meetup.com","gender":"Female","ip_address":"119.133.2.221"},
	{"id":24,"first_name":"Theodoric","last_name":"Archbald","email":"tarchbaldn@independent.co.uk","gender":"Male","ip_address":"232.144.163.253"},
	{"id":25,"first_name":"Ulick","last_name":"Thoumasson","email":"uthoumassono@sourceforge.net","gender":"Male","ip_address":"73.233.199.237"},
	{"id":26,"first_name":"Willa","last_name":"Rubroe","email":"wrubroep@phoca.cz","gender":"Female","ip_address":"105.181.33.231"},
	{"id":27,"first_name":"Rachele","last_name":"Goodbarr","email":"rgoodbarrq@google.com","gender":"Female","ip_address":"0.159.135.161"},
	{"id":28,"first_name":"Tamara","last_name":"Brownscombe","email":"tbrownscomber@wired.com","gender":"Female","ip_address":"222.98.82.138"},
	{"id":29,"first_name":"Chrissie","last_name":"Skpsey","email":"cskpseys@yale.edu","gender":"Female","ip_address":"118.151.33.147"},
	{"id":30,"first_name":"Emmanuel","last_name":"Endricci","email":"eendriccit@sakura.ne.jp","gender":"Male","ip_address":"228.10.237.210"},
	{"id":31,"first_name":"Giacobo","last_name":"Tankin","email":"gtankinu@yandex.ru","gender":"Agender","ip_address":"255.141.50.28"},
	{"id":32,"first_name":"Shea","last_name":"Sedgmond","email":"ssedgmondv@imageshack.us","gender":"Female","ip_address":"78.238.47.13"},
	{"id":33,"first_name":"Brear","last_name":"Casassa","email":"bcasassaw@unc.edu","gender":"Non-binary","ip_address":"24.43.57.25"},
	{"id":34,"first_name":"Vale","last_name":"Culligan","email":"vculliganx@photobucket.com","gender":"Male","ip_address":"59.130.140.107"},
	{"id":35,"first_name":"Michal","last_name":"Bonwell","email":"mbonwelly@diigo.com","gender":"Agender","ip_address":"174.189.55.141"},
	{"id":36,"first_name":"Zulema","last_name":"Sheals","email":"zshealsz@imgur.com","gender":"Polygender","ip_address":"10.3.224.240"},
	{"id":37,"first_name":"Claudette","last_name":"Crichton","email":"ccrichton10@wix.com","gender":"Female","ip_address":"155.55.245.50"},
	{"id":38,"first_name":"Calhoun","last_name":"Foulcher","email":"cfoulcher11@bloglovin.com","gender":"Male","ip_address":"164.226.152.133"},
	{"id":39,"first_name":"Maggi","last_name":"Tolussi","email":"mtolussi12@sphinn.com","gender":"Female","ip_address":"23.5.175.104"},
	{"id":40,"first_name":"Dorthea","last_name":"Garlette","email":"dgarlette13@nytimes.com","gender":"Female","ip_address":"2.138.81.95"}
]

const paginationComponentOptions = {
	selectAllRowsItem: true,
	selectAllRowsItemText: 'ALL',
  };
 
function Datatable() {
  return (
	<>
	<title>Results page</title>
	<h1 className="text-sm font-bold text-slate-700">
		ตารางข้อมูล 
		<span className='ps-2 font-bold'>
		( Data Table )
		</span>
	</h1>
	<div className=' shadow-md rounded-xl mt-5 '>
		<div className='table table-zebra p-5'>
			<DataTable
				title= "Test Data"
				columns={columns}
				data={data}
				pagination
				paginationComponentOptions={paginationComponentOptions}
			/>
		</div>
	</div>
	</>
  )
}

export default Datatable