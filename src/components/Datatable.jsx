import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]

function Datatable() {
  return (
	<>
	<h1 className="text-sm font-bold text-slate-700">
		ตารางข้อมูล 
		<span className='ps-2 font-bold'>
		( Data Table )
		</span>
	</h1>
    <div className='table'>
        <DataTable
        columns={columns}
        data={data}
        />
    </div>
	</>
  )
}

export default Datatable