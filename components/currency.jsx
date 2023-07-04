export default function Currency ({value}) {


return (
	<span>{new Intl.NumberFormat("id-ID", {
        		style: "currency",
	        	currency: "IDR",
	        	maximumFractionDigits: 0
     	 	  }).format(value)}</span>
)

}
