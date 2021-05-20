export default {
    pages: () => [
        // Ordering existing list pages
        {
            label: 'Product Data',
            children: [
                { listKey: 'ProductMedicine' },
                { listKey: 'ProductInstrument' },
            ],
        },
        {
            label: 'Drug Data',
            children: [
                { listKey: 'Brand' },
                { listKey: 'Instrument' },
                { listKey: 'Medicine' },
                { listKey: 'SubClinical', label: 'Sub Clinical Diseases' },
                { listKey: 'Clinical', label: 'Clinical Diseases' },
            ],
        },
        {
            label: 'Drug Data Helpers',
            children: [
                { listKey: 'Manufacturer' },
                { listKey: 'Timing' },
                { listKey: 'Type' },
            ],
        },
        {
            label: 'Doctor Management',
            children: [
                { listKey: 'DoctorCategory'},
            ],
        },
    ],
};
