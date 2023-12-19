exports.getAction = function () {
    return {
        id: 'sales-invoice-print',
        label: 'Print',
        perspective: 'SalesInvoices',
        view: 'SalesInvoice',
        type: 'entity',
        link: '/services/web/codbex-perseus-ext/print/SalesInvoice/index.html'
    }
}