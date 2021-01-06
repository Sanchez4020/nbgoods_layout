;document.addEventListener('DOMContentLoaded', () => {
    const timer = (time) => {
        let
            minutes = time,
            seconds = 0,
            interval;

        const
            transformation = (number) => {
                return number < 10 ? '0' + number : number;
            },
            getValue = () => {
                if(seconds === 0){
                    seconds = 59
                    if(minutes !== 0){
                        minutes--;
                        return transformation(minutes) + ':' + transformation(seconds);
                    } else {
                        clearInterval(interval)
                        return "TIME'S UP"
                    }

                }  else {
                    seconds--;
                    return transformation(minutes) + ':' + transformation(seconds);
                }
            },
            setValue = () => {
                document.querySelector(".cart__notification-timer").textContent = getValue();
            }

        interval = setInterval(setValue, 1000);
    };

    timer(20);
})