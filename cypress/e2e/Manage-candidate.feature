Feature: Manage candidate status

    Scenario: Change the candidate status from "Interview Scheduled" to "Interview passed"
        Given The candidate have "Interview Scheduled" status

        When Admin log in
        And Admin change the status to "Interview passed" status

        Then The status should be "Interview passed"

    Scenario: Change the candidate status from "Interview Scheduled" to "Interview failed"
        Given The candidate have "Interview Scheduled" status

        When Admin log in
        And Admin change the status to "Interview failed" status

        Then the status should be "Interview failed"


Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses.

    Scenario: Upload a txt file for Initiated applications
        Given The system have candidate with status "Interview Scheduled"

        When The Admin log in
        And Access the candidate form and Enable the edit candidate switch
        And Upload a txt file in resume section and save the form
        And Download the resume txt file

        Then Verify the downloaded file content match the uploaded txt file

    Scenario: Upload a txt file for Hired applications
        Given The system have candidate with status "Hired"

        When The Admin logged in
        And Access the candidate form and Enable the edit candidate switch
        And Upload a txt file in resume section and save the form
        And Download the resume txt file

        Then Verify the downloaded file content match the uploaded txt file