import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
      <form class="p-5">
      <div class="container mt-4 bg-light p-5">
        <div class="row">
        <div class="col-sm-4">
          <h2>Wymiary przesyłki: </h2>
              <div class="mb-3">
                <label for="packageLength" class="form-label">Długość przesyłki:</label>
                <input type="text" class="form-control" id="packageLength" />
              </div>
              <div class="mb-3">
                <label for="packageHeight" class="form-label">Wysokość przesyłki:</label>
                <input type="text" class="form-control" id="packageHeight" />
              </div>
              <div class="mb-3">
                <label for="packageWidth" class="form-label">Szerokość przesyłki:</label>
                <input type="text" class="form-control" id="packageWidth" />
              </div>
              <div class="container">
              <img class="img-fluid" src="https://przesylarka.pl/sites/default/files/u140926/paczka-wymiary.png" width="370" />
              </div>
          </div>
          <div class="col-sm-4">
            <h2>Dane nadawcy:</h2>
              <div class="mb-3">
                <label for="senderName" class="form-label">Imię:</label>
                <input type="text" class="form-control" id="senderName" />
              </div>
              <div class="mb-3">
                <label for="senderSurname" class="form-label">Nazwisko:</label>
                <input type="text" class="form-control" id="senderSurname" />
              </div>
              <div class="mb-3">
                <label for="senderCity" class="form-label">Miasto:</label>
                <input type="text" class="form-control" id="senderCity" />
              </div>
              <div class="mb-3">
                <label for="senderAddress" class="form-label">Ulica:</label>
                <input type="text" class="form-control" id="senderAddress" />
              </div>
              <div class="mb-3">
                <label for="senderApartment" class="form-label">Numer mieszkania:</label>
                <input type="text" class="form-control" id="senderApartment" />
              </div>
              <div class="mb-3">
                <label for="phoneSender" class="form-label">Numer telefonu:</label>
                <input type="text" class="form-control" id="senderPhone" />
              </div>
          </div>
          <div class="col-sm-4">
            <h2>Dane odbiorcy</h2>
            <div class="mb-3">
                <label for="senderName" class="form-label">Imię:</label>
                <input type="text" class="form-control" id="senderName" />
              </div>
              <div class="mb-3">
                <label for="senderSurname" class="form-label">Nazwisko:</label>
                <input type="text" class="form-control" id="senderSurname" />
              </div>
              <div class="mb-3">
                <label for="senderCity" class="form-label">Miasto:</label>
                <input type="text" class="form-control" id="senderCity" />
              </div>
              <div class="mb-3">
                <label for="senderAddress" class="form-label">Ulica:</label>
                <input type="text" class="form-control" id="senderAddress" />
              </div>
              <div class="mb-3">
                <label for="senderApartment" class="form-label">Numer mieszkania:</label>
                <input type="text" class="form-control" id="senderApartment" />
              </div>
              <div class="mb-3">
                <label for="phoneSender" class="form-label">Numer telefonu:</label>
                <input type="text" class="form-control" id="senderPhone" />
              </div>
              <button type="submit" class="btn btn-secondary">Oblicz koszt przesyłki</button>
          </div>
        </div>
      </div>
      </form>
      </div>
    </div>
  );
}

export default App;
