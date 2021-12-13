function name0()
{
    var nickname = "Fadil";
    var fullname = "Muhammad Fadillah Akbar";

    function addGelar( name )
    {
        return name + ".M.pd"
    }
    return addGelar(fullname);
}

function name1( namalengkap )
{
    return namalengkap.namadepan + namalengkap.namatengah + namalengkap.namabelakang;
}
console.log(name1({namadepan : "Muhammad ", namatengah : "Fadillah ", namabelakang : "Akbar"}));

function name2( namalengkap )
{
    return namalengkap();
}
console.log(
    name2(function(){return "embed"})
);