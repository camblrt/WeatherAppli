// The different items of the weather : unit, city, description, temperature, icone, date

export class WeatherItem{
  constructor(public unit: string, public cityName : string,
    public description0: string, public max0: number, public min0: number, public icon0: string, public date0: string,
    public description1: string, public max1: number, public min1: number, public icon1: string, public date1: string,
    public description2: string, public max2: number, public min2: number, public icon2: string, public date2: string,
    public description3: string, public max3: number, public min3: number, public icon3: string, public date3: string,
    public description4: string, public max4: number, public min4: number, public icon4: string, public date4: string
    ){}
}
