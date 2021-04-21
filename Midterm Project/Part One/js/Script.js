var currency = {
    'EUR': {'CAD': 1.51,'USD': 1.19,'BTC': 0.000021,'ETH': 0.00065},
    'CAD': {'EUR': 0.66, 'USD': 0.79,'BTC': 0.000014, 'ETH': 0.00043},
    'BTC': {'EUR':47626.68, 'USD':56744.80, 'ETH':0.03253762, 'CAD': 71823.97},
    'USD': {'EUR': 0.84, 'ETH':0.00054101, 'CAD':1.26, 'BTC':0.000018},
    'ETH': {'EUR':1552.65, 'USD':1849.75 ,'BTC': 0.033, 'CAD': 2338.02}}


    function euroConverter(){
        document.converter.dollar.value = document.converter.euro.value * 1.19
        document.converter.cad.value = document.converter.euro.value * 1.15
        document.converter.btc.value = document.converter.euro.value * 0.000021 
        document.converter.eth.value = document.converter.euro.value * 0.00065
        }
        function dollarConverter(){
        document.converter.euro.value = document.converter.dollar.value * 0.84
        document.converter.btc.value = document.converter.dollar.value * 0.000018
        document.converter.cad.value = document.converter.dollar.value * 1.26
        document.converter.eth.value = document.converter.dollar.value * 0.00054101
        }
        function btcConverter(){
        document.converter.euro.value = document.converter.btc.value * 47626.68
        document.converter.USD.value = document.converter.btc.value * 56744.80
        document.converter.cad.value = document.converter.btc.value * 71823.97
        document.converter.eth.value = document.converter.btc.value * 0.03253762
        }
        function cadConverter(){
        document.converter.dollar.value = document.converter.cad.value * 1.26
        document.converter.euro.value = document.converter.cad.value * 0.66
        document.converter.btc.value = document.converter.cad.value * 0.00054101
        document.converter.eth.value = document.converter.cad.value * 0.000018
        }
        
        function ethConverter(){
        document.converter.euro.value = document.converter.eth.value * 1552.65
        document.converter.dollar.value = document.converter.eth.value * 1849.75
        document.converter.cad.value = document.converter.eth.value * 0.033
        document.converter.btc.value = document.converter.eth.value * 2338.02
        
        }