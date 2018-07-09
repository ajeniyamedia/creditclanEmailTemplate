import { Component, OnInit } from '@angular/core'; 
import { UserService, OperationsService, AuthenticationService, StorageService } from '../../_services/index';

@Component({
  selector: 'app-disbursmentreport',
  templateUrl: './disbursmentreport.component.html',
  styleUrls: ['./disbursmentreport.component.css']
})

export class DisbursmentreportComponent implements OnInit {
    loading = false;
    public showAdvSearch = false;
    showAdvSearchBody=true;
    public filter_types = [
        {
            'display':'Date Range',
            'value':'date_duration'
        },
        {
            'display':'Customer',
            'value':'customer'
        },
        {
            'display':'Gender',
            'value':'gender'
        },
        {
            'display':'Loan Officer',
            'value':'loan_officer'
        },
        {
            'display':'Marital Status',
            'value':'m_status'
        },
        {
            'display':'Occupation',
            'value':'occupation'
        },
        {
            'display':'Work Sector',
            'value':'work_sector'
        },
        {
            'display':'Guarantor Provided',
            'value':'guarantor'
        }  ,
        {
            'display':'Loan Status',
            'value':'loan_status'
        }  
    ]
    aggregate={
        total_disbursed_amount:'0'
    };
    customers:any;
    occupations:any;
    sectors:any;

    filterStatus='date_duration';
    downloadLinkReceived=false;
    downloadLink="";
  	public currentUser: any;
    public data: any;
    public rows = [];
    public columns = {};
    objectKeys = Object.keys;

    filter = {
        TPDATE:'',
        TPDATE_:'',
        PEOPLE_ID:'',
        LOAN_OFFICER:'',
        GENDER:'',
        FILTER_TYPE:'',
        LOAN_STATUS:'',
        OCCUPATION_ID:'',
        WORK_SECTOR:'',
        MARITAL_STATUS:'',
        GUARANTOR_PROVIDED:'', 
    };
    constructor( public operationsService: OperationsService, public storageService: StorageService) {
        this.currentUser = this.storageService.read<any>('currentUser');        
    }

    ngOnInit() {
        this.columns = {
            'Loan#' : true,
            'Principal' : true,
            'Paid' : true,
            'Date Paid' : true,
            'Method' : true
        }
    }
    changeFilter(event){
        this.filterStatus=event.target.value
     }
    // set the keys of the response object as column names on the table
    resetColumn(obj) {
        var cols = {};
        for(var key in obj) {
            cols[key] = true;
        }
        this.columns = cols;
    } 

    exportReport(){
        if (typeof this.rows == 'undefined' || this.rows.length < 1) {
            alert("There are no data to export.");
            return;
        }

        // Export only fields that are checked to be open
        let rows = [];
        let field_names = [];
        for (var i = 0; i < this.rows.length; i++) {
            let cols = {};
            for (let column of this.objectKeys(this.columns)) {                
                if (this.columns[column]) {
                   cols[column] = this.rows[i][column];
                   field_names.push(column);
                }
            }
             rows.push(cols);
        }

        // Send to the server
        this.operationsService.exportReport(this.currentUser.token, {'report': 'due_loans', 'rows': rows, 'field_names': field_names}).subscribe(data => {
            if (data.status) {
                alert("Data Successfully exported. Download would start automatically.");
                window.open(data.message);
                return;
            }else{
                alert("Data could not be exported.");
            }
        });
    }
    
    getLoans(){
        this.loading = true;
        this.operationsService.getDisbursementReport(this.currentUser.token, this.filter).subscribe(data => {
            this.loading = false;
            this.rows = data.message;
            if (typeof this.rows !== 'undefined' && this.rows.length > 0) {
                this.resetColumn(data.message[0]);
            }
            this.aggregate = data.aggregate;
            
            if(!this.showAdvSearch){
                this.customers = data.customers
                this.occupations = data.occupations;
                this.sectors = data.sectors;
            }         
            this.showAdvSearch = true; 
        });
    }

    
}
