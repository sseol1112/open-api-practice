(function(){
    
    let searchBooks = {
        init : function (){
        },
        settings : function () {
            const self = this;

            self.searchContainer = document.querySelector(".container-search");
            self.inputSearch = document.querySelector(".search-form input");
            self.btnSearch = document.querySelector(".search-form .btn-search");
        },
        bindEvents : function () {
            const self = this;

            self.btnSearch.addEventListener("click", function(){
                searching();
            })
        },
        searching : function () {
            
            const KAKAO_API_KEY = "15c5d3c0331e75e1db22a54afe24971c";
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book",
                data : {
                    query : inputValue
                },
                headers : {
                    Authorization : "KakaoAK " + KAKAO_API_KEY // 공통으로 요청 할 헤더
                },
                success : function(data){
                    var html = "<div>" +
                               "<h2>"+"</h2>" +                    

                    console.log(data);
                },
                error : function(request,status,error) {
                    console.log("code: " + request.status)
                    console.log("message: " + request.responseText)
                    console.log("error: " + error);
                }
            })
        }
    };

    $(document).ready(function(){
        searchBooks.init();
    })
}());