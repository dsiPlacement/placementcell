#TODO

##Start

- Build the overall design

##Design

- Register page for account
  - Inputs are usn and email
- A link is sent which points to page that sets password

- On login, if first time, user is directed to setup profile
  - Profile includes 4 major fields
    - General data(everyone must fill these)
    - BE data(if user selects BE, show the fields)
    - MCA data(if user selects MCA, show the fields)
    - MTech data(if user has done MTech, show only one)
      - User can select one among the above 3
      NOTE:For MTech, user only inputs BE aggregate and not more details
  - Finally redirect him to dashboard where more data is shown
- Else direct him to dashboard(design yet to implement)
