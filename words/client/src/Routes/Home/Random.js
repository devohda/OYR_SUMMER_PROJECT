import React from 'react';
import RandomWord from './RandomWord.js';



class Random extends React.Component {


    state = {
        words: '',
        randoms: [],
        cnt: 0,
        N:0,
    };
    
    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ words: res })) //promise 사용.
            .catch((err) => console.log(err)); //에러 처리
    }

    //동기식 방식으로 변경 async, await 사용. api 가져와서 json으로 파싱하기.
    callApi = async () => {
        const response = await fetch('api/words'); //단어 가져오기.
        const body = await response.json(); //json 형식으로 파싱.
        return body;
    };

    static defaultProps = {
        data: [],
        data2 : [],
      }
    
    render() {

        const { data } = this.props;
        const { data2 } = this.props;
        const {N} = this.props;

        function randomNum () {
            data.slice(0,2);
            let Num = [];
                for(var i=0; i<3; i++) {
                    let n = Math.floor(Math.random() * 135) + 1;
                    
                    console.log(sameNum(n))
                    if (! sameNum(n)) {
                        n = n + 218;
                        Num.push(n);
                    } else {
                        i--;
                    }
                }
            function sameNum (n) {
                return Num.find((e) => (e === n));
            }
            return Num;
        };

        /* const word = []; */
        
        return (
            
            <>
            <main>
                { this.state.words ?
                    randomNum().map(n=>{
                        console.log("랜덤 수 : " + n);
                        this.state.words.map(w => {
                            if(n === w.id && this.state.cnt < 3){
                                console.log("단어 id 값 : " + w.id);
                                console.log(w.name)

                                
                                data.push({name:
                                    w.name,
                                    id:w.id
                                });
                                
                                
                                this.state.cnt++;
                            }  
                    })
                    })
                 : ""
                }

                {
                    data.map( w =>{
                        return(
                            <RandomWord
                                    key={w.id}
                                    word_name = {w.name}
                            />

                        )
                    })

                    
                }
                

            </main>





                {/* <main>
                { this.state.words ?
                    randomNum().map(n=>{
                        console.log("랜덤 수 : " + n);
                        this.state.words.map(w => {
                            if(n === w.id){
                                console.log("단어 id 값 : " + w.id);
                                console.log(w.name)
                                return(
                                  <RandomWord
                                    key={w.id}
                                    word_id= {w.id}
                                    word_name = {w.name}
                                    word_meaning = {w.meaning}
                                  />
                                )
                            }
                        
                    })
                    })
                 : ""
              }
            </main> */}



            {/* <main>
                { this.state.words ?
                this.state.words.map(w => {
                        return(
                          <RandomWord
                            key={w.id}
                            word_id= {w.id}
                            word_name = {w.name}
                          />)
                    }) : ""
              }
            </main> */}
            </>


        );
    }
}

export default Random;