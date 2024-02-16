from flask import Flask, request
import pandas as pd
import numpy as np
import pickle
app = Flask('app')

bikebrands= pickle.load(open("./bike/brands_bike.pkl", "rb"))
rfr_bike = pickle.load(open("./bike/rfr_bike.pkl", "rb"))
scaler_bike = pickle.load(open("./bike/scaler_bike.pkl", "rb"))
@app.route('/api/predict/bike', methods=['POST'])
def bike():
    # if owner=='first': owner_val = 0
    # elif owner=='fourth or more': owner_val = 1
    # elif owner=='second': owner_val = 2
    # else: owner_val = 3
    brand_occur_df = pd.DataFrame(0, index=[0], columns=bikebrands)
    bike_list = [request.get_json(silent=True)['brand']]
    for bike in bike_list:
        if bike in brand_occur_df.columns:
            brand_occur_df.loc[0, bike] = 1
    
    del request.get_json(silent=True)['brand']
    new_df = pd.DataFrame([request.get_json(silent=True)])
    
    final_df = pd.concat([new_df, brand_occur_df], axis=1)
    final_df  = scaler_bike.transform(final_df)
    y_pred_new = rfr_bike.predict(final_df)
    return {'predict':str(y_pred_new[0])}
#     {
#   "kms_driven": 30000,
#   "age":2,
#   "power": 155,
#   "Owner_Type": 0,
#   "brand":"Kawasaki"
# }

carbrands= pickle.load(open("./car/car_brands_new.pkl", "rb"))
randomForestCar = pickle.load(open("./car/extra_tree.pkl", "rb"))
scaler_car = pickle.load(open("./car/scaler_car_new.pkl", "rb"))
@app.route('/api/predict/car', methods=['POST'])
def car():
    res=request.get_json(silent=True)
    res['Diesel'], res['Petrol'], res['Other'] = 0, 0, 0
    
    fuel = res['Fuel'].lower()
    transmission = res['transmission'].lower()
    if fuel=='diesel':
        res['Diesel'] = 1
    elif fuel == 'other':
        res['Other'] = 1
    else:
        res['Petrol'] = 1
    
    if transmission=='automatic':
        res['transmission'] = 1
    else:
        res['transmission'] = 0

    new_input_dict = {
        'Year': res['year'],
        'Transmission': res['transmission'], 
        'mileage_num': float(res['mileage_num']), 
        'engine_num': float(res['engine_num']), 
        'power_num': float(res['power_num']), 
        'Diesel': res['Diesel'], 
        'Other': res['Other'], 
        'Petrol': res['Petrol'], 
        'Kilometers_Driven': res['km_driven']
    }

    brand_occur_df = pd.DataFrame(0, index=[0], columns=carbrands)
    car_list = [res['brand']]
    for car in car_list:
        if car in brand_occur_df.columns:
            brand_occur_df.loc[0, car] = 1

    new_df = pd.DataFrame([new_input_dict])
    
    final_df = pd.concat([new_df, brand_occur_df], axis=1)
    final_df  = scaler_car.transform(final_df)
    y_pred_new = randomForestCar.predict(final_df)
    return {'predict':str(y_pred_new[0])}
		# {
		#   "year":2023,
		#   "transmission":"automatic",
		#   "mileage_num":24.45,
		#   "engine_num":1545,
		#   "power_num":162.7,
		#   "Fuel":"petrol",
		#   "km_driven":200,
		#   "brand":"Audi"
		# }

housecities= pickle.load(open("./house/cities_house.pkl", "rb"))
scaler_house = pickle.load(open("./house/scaler_house.pkl", "rb"))
housemodel = pickle.load(open("./house/rfr_house_updated.pkl", "rb"))
@app.route('/api/predict/house', methods=['POST'])
def house():
    tier_1 = ['ahmedabad', 'bangalore', 'chennai', 'delhi', 'hyderabad', 'kolkata', 'mumbai', 'pune']
    tier_2 = ['agartala', 'agra', 'ahmednagar', 'ajmer', 'akola', 'aligarh', 'allahabad', 'alwar', 'ambala', 'amravati', 'amritsar', 'amroha', 'anand', 'anantapur', 'angul', 'arrah', 'asansol', 'aurangabad', 'baddi', 'bahadurgarh', 'balasore', 'bankura', 'banswara', 'barabanki', 'bardhaman', 'bareilly', 'beed', 'belgaum', 'berhampur', 'betul', 'bhagalpur', 'bhandara', 'bharatpur', 'bharuch', 'bhavnagar', 'bhilai', 'bhimavaram', 'bhiwadi', 'bhiwani', 'bhopal', 'bhubaneswar', 'bhuj', 'bikaner', 'bilaspur', 'bokaro', 'chandigarh', 'chandrapur', 'chhindwara']

    res=request.get_json(silent=True)
    under_const_val = 0
    rera_val = 0
    ready_to_move_val = 0
    resale_val = 0
    tier_val = 0
    city = res['city'].lower()
    if city in tier_1:
        tier_val=2
    elif city in tier_2:
        tier_val = 1
    else:
        tier_val = 0
    if res['under_const'].lower() == 'yes':
        under_const_val = 1
    else:
        under_const_val = 0
    
    if res['rera'] == 'yes':
        rera_val = 1
    else:
        rera_val = 0
    
    if res['ready_to_move'].lower() == 'yes':
        ready_to_move_val = 1
    else:
        ready_to_move_val = 0
    
    if res['resale'].lower() == 'yes':
        resale_val = 1
    else:
        resale_val = 0
    
    city_occur_df = pd.DataFrame(0, index=[0], columns=housecities)
    city_list = [city]
    for c in city_list:
        if c in city_occur_df.columns:
            city_occur_df.loc[0, c] = 1
    
    new_inp = {
        'UNDER_CONSTRUCTION': under_const_val,
        'RERA': rera_val,
        'READY_TO_MOVE': ready_to_move_val,
        'RESALE': resale_val, 
        'SQUARE_FT': float(res['area']),
        'City_Tier': tier_val,
        'rooms': res['rooms']
    }

    new_df = pd.DataFrame([new_inp])
    
    final_df = pd.concat([new_df, city_occur_df], axis=1)
    final_df  = scaler_house.transform(final_df)
    y_pred_new = np.exp(housemodel.predict(final_df))
    return {'predict':str(y_pred_new[0])}
# 		{
#   "under_const":"yes",
#   "rera":"no",
#   "ready_to_move":"no",
#   "resale":"yes",
#   "area":500,
#   "rooms":3,
#   "city":"bhiwandi"
# }

laptopPipe= pickle.load(open("./laptop/laptop_pipe.pkl", "rb"))

@app.route('/api/predict/laptop', methods=['POST'])
def laptop():
    new_df = pd.DataFrame([request.get_json(silent=True)])
    y_pred = np.exp(laptopPipe.predict(new_df))
    return {'predict':str(y_pred[0])}
	# {
 #    "Company": "Asus",
 #    "Inches": 14,
 #    "Ram": 8,
 #    "Weight": 1.4,
 #    "Cpu brand": "Intel Core i7",
 #    "Gpu brand": "Intel",
 #    "SSD": 512,
 #    "HDD": 0
 #  }

mobilebrands= pickle.load(open("./phone/phone_brands.pkl", "rb"))
mobilechipset = pickle.load(open("./phone/phone_chipset.pkl", "rb"))
mobileKneigh = pickle.load(open("./phone/k_neighbours.pkl", "rb"))
mobiless = pickle.load(open("./phone/scaler_phone.pkl", "rb"))

@app.route('/api/predict/mobile', methods=['POST'])
def new_input():
    res=request.get_json(silent=True)
    brand = res['brand'].replace(" ","")
    brand_occur_df = pd.DataFrame(0, index=[0], columns=mobilebrands)
    brand_list = [brand]
    for b in brand_list:
        if b in brand_occur_df.columns:
            brand_occur_df.loc[0, b] = 1
    
    chip_occur_df = pd.DataFrame(0, index=[0], columns=mobilechipset)
    chip_list = [res['chip']]
    for c in chip_list:
        if c in chip_occur_df.columns:
            chip_occur_df.loc[0, c] = 1
    
    new_input_dict = {
        'phone_ram': res['ram'],
        'int_storage': res['int_str'],
        'rear_cam': res['rear_cam'],
        'front_cam': res['front_cam'],
        'display_inch': res['display']
    }

    new_df = pd.DataFrame([new_input_dict])
    final_df = pd.concat([new_df, brand_occur_df], axis=1)
    final_final_df = pd.concat([final_df, chip_occur_df], axis=1)
    final_final_df  = mobiless.transform(final_final_df)
    y_pred_new = mobileKneigh.predict(final_final_df)
    return {'predict':str(y_pred_new[0][0])}
		# {
		#   "ram":6,
		#   "int_str":128,
		#   "rear_cam":64,
		#   "front_cam":16,
		#   "display":6.59,
		#   "brand":"one plus",
		#   "chip":"snapdragon 695"
		# }

@app.route('/', methods=['GET'])
def home():
	return 'hello'

app.run(host='0.0.0.0', port=8080)