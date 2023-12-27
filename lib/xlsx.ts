import { member } from '@/member'
import xlsx from 'json-as-xlsx'
import { IJsonSheet } from 'json-as-xlsx'

export function downloadToExcel() {
    let columns: IJsonSheet[] = [
        {
            sheet: "Members",
            columns: [
                { label: "Serial No", value: "id"},
                { label: "GCP", value: "gcp"},
                { label: "Company", value: "company_name"},
                { label: "Email", value: "email"},
                {
                    label: "Registration Date",
                    value: (row) => new Date(row.registration_date as string).toLocaleDateString(),
                }
            ],
            content: member,
        }
    ]

    let settings = {
        fileName: "Member Excel"
    }
    xlsx(columns, settings)
}