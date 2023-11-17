export interface JobTitleResponse {
    data: {
        id: number,
        title: string,
        description: string,
        note: string,
        jobSpecification: {
          id: string,
          filename: string,
          fileType: string,
          fileSize: string
        }
      }
}